# Spendwise Dashboard Shell - Week 4 Assignment

## What I Built
I built the Spendwise Dashboard shell,which is the foundation for the capstone project ..It's a modern,clean expense tracker dashboard with no functionality yet only the visual structure using realistic static content.

The dashboard contains:
- A sidebar / navigation Menu with logo and 5 nav items
- A Header with welcome text, serach, and user avatar
- A Summary row (Total Balance,Monthly Spend)
- At least 6 category cards: Food, Transport,Rent, Entertainment, Saving, Utilities each showing amount,progress bar, and trend

## FILE STRUCTURE
- index.html - The structure of the dassboard
- style.css - All styling, layout,theme, and responsiveness
- README.md -This explanation

## 1. Dashboard Layout (CSS Grid & Flexbox)
**CSS Grid for overall page layout:**
- dashboard uses 'display:grid with 'grid-template-column:272px 1fr' and grid-template-areas: "sidebar header" "sidebar" content
- cards-gride also uses Grid: 'repeat(auto-fit, minmax(260px,1fr))' so cards wrap automatically
### Flexbox for arranging content inside:
- Header('main-header'): display:flex; justify-content: space-between' to put title left and search right
- Sidebar ('sidebar-nav): display: flex; flex-direction: column' for vertical nav
- Each card( 'card'): 'display:flex; flex-direction:column' to stack icon,title amount

I did not use absolute positioning for the layout.

## 2. Theme using CSS Custom Properties
All colors are define on :root as required:
:root{
    --brand-color: #4f46e5;
    --accent-color: #14b8a6;
    --surface-color: #ffffff;
    --bg-color: #f8f9ff;
    --text-primary: #111827;
    --text-secondary: #6b7280;
}