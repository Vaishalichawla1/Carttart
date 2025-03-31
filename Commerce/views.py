from django.shortcuts import render  # Import the render function to render HTML templates

# View function for the Commerce page
def serviceCommerce(request):
    return render(request, 'commerce.html')  # Renders the 'commerce.html' template when the 'commerce/' URL is accessed
