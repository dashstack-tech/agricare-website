import os
try:
    import pypdf
except ImportError:
    os.system('python3 -m pip install pypdf --break-system-packages')
    import pypdf

def extract_pdf(pdf_path):
    print(f"--- Extracting {os.path.basename(pdf_path)} ---")
    try:
        reader = pypdf.PdfReader(pdf_path)
        text = ""
        for i, page in enumerate(reader.pages):
            page_text = page.extract_text()
            text += f"\n--- Page {i+1} ---\n{page_text}"
        return text
    except Exception as e:
        return f"Error reading {pdf_path}: {e}"

pdf_files = [
    "/Users/ravi/Downloads/agry_care_website/AA2412251129769_RC01012026.pdf",
    "/Users/ravi/Downloads/agry_care_website/AGRI CARE CHEMICALS 1.pdf",
    "/Users/ravi/Downloads/agry_care_website/DOC-20260113-WA0002..pdf"
]

for pdf in pdf_files:
    content = extract_pdf(pdf)
    txt_path = pdf + ".txt"
    with open(txt_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Saved text to {txt_path}")
    # Print the first 500 chars
    print(content[:1000])
    print("\n" + "="*50 + "\n")
