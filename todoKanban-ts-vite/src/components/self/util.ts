

export function getEl(elProps: elProps){
    const res = document.createElement(elProps.createEl);

    const inner = elProps.inner;
    if(inner){
        res.innerText = inner;
    }
    
    const classes = elProps.class;
    if(classes && classes.length > 0){
        classes.map((i)=>{res.classList.add(i)});
    }

    const props = elProps.props;
    if(props){
        Object.entries(props).map(([attr, val])=>{
            res.setAttribute(attr, String(val));
        });
    }
    
    return res;
}