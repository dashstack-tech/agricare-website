import pypdf

reader = pypdf.PdfReader("/Users/ravi/Downloads/agry_care_website/DOC-20260113-WA0002..pdf")
print("Number of pages:", len(reader.pages))
for i, page in enumerate(reader.pages):
    print(f"Page {i+1} images count:", len(page.images))
    for j, img in enumerate(page.images):
        print(f"Image {j+1}: {img.name}, size: {len(img.data)} bytes")
        with open(f"/Users/ravi/Downloads/agry_care_website/extracted_img_p{i+1}_{j+1}.png", "wb") as f:
            f.write(img.data)
        print("Saved image")
