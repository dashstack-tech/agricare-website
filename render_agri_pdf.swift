import Foundation
import PDFKit
import AppKit

let pdfUrl = URL(fileURLWithPath: "/Users/ravi/Downloads/agry_care_website/AGRI CARE CHEMICALS 1.pdf")
guard let document = PDFDocument(url: pdfUrl) else {
    print("Could not load PDF document")
    exit(1)
}

let pageCount = document.pageCount
print("Total pages in AGRI CARE CHEMICALS 1.pdf: \(pageCount)")

// Let's render all pages
for idx in 0..<pageCount {
    guard let page = document.page(at: idx) else {
        print("Could not get page \(idx)")
        continue
    }

    let pageRect = page.bounds(for: .mediaBox)
    let width = pageRect.width
    let height = pageRect.height

    print("Page \(idx + 1) size: \(width) x \(height)")

    let image = NSImage(size: NSSize(width: width, height: height))
    image.lockFocus()

    guard let context = NSGraphicsContext.current?.cgContext else {
        print("Could not get graphics context for page \(idx)")
        continue
    }

    context.setFillColor(NSColor.white.cgColor)
    context.fill(pageRect)

    page.draw(with: .mediaBox, to: context)

    image.unlockFocus()

    guard let tiffData = image.tiffRepresentation,
          let bitmapRep = NSBitmapImageRep(data: tiffData),
          let pngData = bitmapRep.representation(using: .png, properties: [:]) else {
        print("Could not generate PNG data for page \(idx)")
        continue
    }

    let outputUrl = URL(fileURLWithPath: "/Users/ravi/Downloads/agry_care_website/public/agri_page_\(idx + 1).png")
    do {
        try pngData.write(to: outputUrl)
        print("Successfully rendered Page \(idx + 1) to \(outputUrl.path)")
    } catch {
        print("Could not write PNG data to file: \(error)")
    }
}
