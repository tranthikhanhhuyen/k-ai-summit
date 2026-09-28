import re

def fix_file(filename, endpoint):
    with open(filename, 'r') as f:
        content = f.read()

    # Pattern to match the fetch block
    pattern = r"try\s*\{\s*const res = await fetch\('http://localhost:3001/api/" + endpoint + r"', \{.*?\n\s*if \(!res\.ok\) throw new Error\('Failed to submit'\);\s*setIsSubmitted\(true\);\s*\}\s*catch \(err: any\) \{"
    
    replacement = """try {
      // Mock API call for Vercel static deployment
      await new Promise(resolve => setTimeout(resolve, 1200));
      setIsSubmitted(true);
    } catch (err: any) {"""

    content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    with open(filename, 'w') as f:
        f.write(content)

fix_file('src/components/BookingModal.tsx', 'book')
fix_file('src/components/RegistrationForm.tsx', 'register')

# For footer, it's slightly different (subscribe)
with open('src/components/Footer.tsx', 'r') as f:
    footer = f.read()
    
footer_pattern = r"try\s*\{\s*const res = await fetch\('http://localhost:3001/api/subscribe', \{.*?\n\s*if \(!res\.ok\) throw new Error\('Failed to subscribe'\);\s*setIsSubscribed\(true\);\s*\}\s*catch \(err\) \{"

footer_replacement = """try {
      // Mock API call for Vercel static deployment
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubscribed(true);
    } catch (err) {"""
    
footer = re.sub(footer_pattern, footer_replacement, footer, flags=re.DOTALL)

with open('src/components/Footer.tsx', 'w') as f:
    f.write(footer)

