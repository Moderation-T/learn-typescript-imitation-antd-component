```js
// father component
import {createContext} from React;

export const MenuContext = createContext<IMenuContext>({index: '0'})

  const value: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  }

<Father>
  <MenuContext.Provider value={value}>
    {children}
  </MenuContext.Provider>
<Father>
```

```js
// son component
import {useContext} from React;
import { MenuContext } from 'father'

const context = useContext(MenuContext)
console.log(context)
```
