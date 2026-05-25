import Foundation
import PDFKit
import AppKit

let pdfUrl = URL(fileURLWithPath: "/Users/ravi/Downloads/agry_care_website/DOC-20260113-WA0002..pdf")
guard let document = PDFDocument(url: pdfUrl) else {
    print("Could not load PDF document")
    exit(1)
}

guard let page = document.page(at: 0) else {
    print("Could not get page 0")
    exit(1)
}

let pageRect = page.bounds(for: .mediaBox)
let width = pageRect.width
let height = pageRect.height

print("Page size: \(width) x \(height)")

let image = NSImage(size: NSSize(width: width, height: height))
image.lockFocus()

guard let context = NSGraphicsContext.current?.cgContext else {
    print("Could not get graphics context")
    exit(1)
}

context.setFillColor(NSColor.white.cgColor)
context.fill(pageRect)

page.draw(with: .mediaBox, to: context)

image.unlockFocus()

guard let tiffData = image.tiffRepresentation,
      let bitmapRep = NSBitmapImageRep(data: tiffData),
      let pngData = bitmapRep.representation(using: .png, properties: [:]) else {
    print("Could not generate PNG data")
    exit(1)
}

let outputUrl = URL(fileURLWithPath: "/Users/ravi/Downloads/agry_care_website/DOC-20260113-WA0002.png")
do {
    try pngData.write(to: outputUrl)
    print("Successfully rendered PDF to \(outputUrl.path)")
} catch {
    print("Could not write PNG data to file: \(error)")
}
