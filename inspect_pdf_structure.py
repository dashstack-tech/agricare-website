import pypdf
reader = pypdf.PdfReader("/Users/ravi/Downloads/agry_care_website/DOC-20260113-WA0002..pdf")
page = reader.pages[0]
print(page.keys())
if '/Resources' in page:
    res = page['/Resources']
    print("Resources keys:", res.keys())
    if '/XObject' in res:
        xobj = res['/XObject']
        print("XObject keys:", xobj.keys())
        for key in xobj:
            obj = xobj[key]
            print(key, obj['/Subtype'])
