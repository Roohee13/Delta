import os
import pdfkit

def convert_html_to_pdf():
    //Ask user for HTML file input
    html_file_path = input("Please enter the path to the HTML file: ")

    //Check if the file exists and is an HTML file
    if not os.path.exists(html_file_path) or not html_file_path.endswith(".html"):
        print("Error: The input you gave us is not correct and thus we cannot convert this file into pdf file.")
        return

    // Get the directory path and file name of the HTML file
    dir_path = os.path.dirname(html_file_path)
    file_name = os.path.basename(html_file_path).split(".")[0]

    // Convert HTML to PDF
    pdf_file_path = os.path.join(dir_path, f"{file_name}.pdf")
    options = {
        'page-size': 'A4',
        'margin-top': '0.75in',
        'margin-right': '0.75in',
        'margin-bottom': '0.75in',
        'margin-left': '0.75in',
        'encoding': "UTF-8",
        'no-outline': None
    }
    with open(html_file_path, 'r', encoding='utf-8') as f:
        html = f.read()
    pdfkit.from_string(html, pdf_file_path, options=options)

    print(f"PDF file saved as {pdf_file_path}")

if __name__ == "__main__":
    convert_html_to_pdf()
