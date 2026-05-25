import Foundation
import Vision
import AppKit

let imageUrl = URL(fileURLWithPath: "/Users/ravi/Downloads/agry_care_website/DOC-20260113-WA0002.png")
guard let image = NSImage(contentsOf: imageUrl),
      let tiffData = image.tiffRepresentation,
      let cgImage = NSImage(data: tiffData)?.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
    print("Could not load image as CGImage")
    exit(1)
}

let requestHandler = VNImageRequestHandler(cgImage: cgImage, options: [:])
let request = VNRecognizeTextRequest { request, error in
    if let error = error {
        print("OCR error: \(error)")
        return
    }
    guard let observations = request.results as? [VNRecognizedTextObservation] else {
        print("No results")
        return
    }
    
    var fullText = ""
    for observation in observations {
        guard let candidate = observation.topCandidates(1).first else { continue }
        fullText += candidate.string + "\n"
    }
    
    print("--- OCR RESULTS ---")
    print(fullText)
    
    let txtPath = "/Users/ravi/Downloads/agry_care_website/DOC-20260113-WA0002.pdf.txt"
    do {
        try fullText.write(toFile: txtPath, atomically: true, encoding: .utf8)
        print("Saved OCR results to \(txtPath)")
    } catch {
        print("Error writing txt: \(error)")
    }
}

request.recognitionLevel = .accurate

do {
    try requestHandler.perform([request])
} catch {
    print("Failed to perform OCR request: \(error)")
}
