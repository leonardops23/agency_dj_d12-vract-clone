from django.shortcuts import render

# Create your views here.
def home(request):
    """
        This view is used to render the home page.
    """

    firstnav_items = {
        'Advertising': '#',
        'Contact': '#',
        'Marketplace': '#',
    }

    secondnav_items = {
        'AGENCIES': '#',
        'FEED':'#',
        'TOOLS': '#',
        'EVENTS': '#',
        'JOBS': '#',
    }

    context = {
        'firstnav_items': firstnav_items,
        'secondnav_items': secondnav_items,
    }

    return render(request, 'index.html', context)
