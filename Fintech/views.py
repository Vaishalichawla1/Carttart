from django.shortcuts import render  # Import the render function to render HTML templates

# View function for the Fintech page
def serviceFintech(request):
    return render(request, 'fintech.html')  # Renders the 'fintech.html' template when the 'fintech/' URL is accessed.
