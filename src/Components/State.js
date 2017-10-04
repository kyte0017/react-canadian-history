
let state = {};
let setState = function(changes) {
    let component;
    let componentProperties = {};

    Object.assign(state, changes);
    //Splitting the url so we can get the href
    let splittedUrl = state.location.replace(/^#\/?|\/$/g, "").split("/");

    switch(splittedUrl[0]) {
        case "newitem":
            component = AddNewPage;
            componentProperties = {
                menuItem: state.menuItem,
                onNewMenuItemChange: function(item) {
                    setState({menuItem: item});
                },
                onSubmitNewItem: function(item) {
                    //Pushing the new data into the array
                    let itemList = state.items;
                    const newKey = itemList.length + 1;
                    itemList.push(Object.assign({}, {key: newKey, id: newKey}, item));
                    setState({items: itemList, menuItem: {name: "", description: "", date: ""}});
                }
            };
            break;
        case "item":
            //The creating the third page with the focused view on one of the items in the array
            component = ItemPage;
            componentProperties = state.items.find(i => i.key == splittedUrl[1]);
            break;
        default:
            component = MainPage;
            componentProperties = {items: state.items};
    }

    let rootElement = React.createElement("div", {},
        React.createElement(Header, {}),
        React.createElement(NavMenu, {}),
        React.createElement(component, componentProperties),
        React.createElement(Footer, {items: footerCredits})
    );

    ReactDOM.render(rootElement, document.getElementById("react-app"));
};

window.addEventListener('hashchange', ()=>setState({location: location.hash}));

//Start the app by declaring the initial state
setState({menuItem: {name: "", description: "", date: ""}, location: location.hash, items: menuItems});
