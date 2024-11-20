# First project using React
## To start my project

#### write in terminal :
```

npm run i

``` 
#### Then do this to open the live server :
```

npm run dev

```
### Libraries used
- `tailwind`
- `react`
- `react-router-dom`
- `react-dom/client`
- `react-document-title`
- `fortawesome/fontawesome-free`
## The problems I faced
**-1** When I was writing `event Scroll on window` code, I faced a problem in the console. It always showed errors with every scroll movement, `but the codes inside it worked` if I pressed the bar button in the navbar. I was trying to solve the problem, especially since the error that was appearing in the console was that `the class didn't exist`. I thought at the time that if I made a condition, it would be solved, but the problem continued until I realized that `the place where the window is located is not inside return`. I felt that when I pressed the button, it would change the value of the [useState](https://react.dev/reference/react/useState), so a render would be made, so `I inserted the window inside Return`, and the problem was actually solved .
#### Code before solving the problem
Event before return :
```javascript

export default function NavBar() {
    let [active, setActive] = useState(false)
    // Animation Heigth navbar when user scroll
    window.addEventListener("scroll", function () {
        const navs_Bar = document.querySelectorAll("nav")[0]
        if (this.scrollY > 30) {
            navs_Bar.classList.replace("py-7", "py-4")
            navs_Bar.classList.replace("h-24", "h-20")
            document.querySelectorAll("nav")[1].classList.replace("top-24", "top-20")
        } else {
            navs_Bar.classList.replace("h-20", "h-24")
            navs_Bar.classList.replace("py-4", "py-7")
            document.querySelectorAll("nav")[1].classList.replace("top-20", "top-24")
        }
    })

```
#### Code after solving the problem
Event after return :
```javascript

export default function NavBar() {
    let [active, setActive] = useState(false)
    return <>
        {
            // Animation Heigth navbar when user scroll
                window.addEventListener("scroll", function () {
                const navs_Bar = document.querySelectorAll("nav")[0]
                if (this.scrollY > 30) {
                    navs_Bar.classList.replace("py-7", "py-4")
                    navs_Bar.classList.replace("h-24", "h-20")
                    document.querySelectorAll("nav")[1].classList.replace("top-24", "top-20")
                } else {
                    navs_Bar.classList.replace("h-20", "h-24")
                    navs_Bar.classList.replace("py-4", "py-7")
                    document.querySelectorAll("nav")[1].classList.replace("top-20", "top-24")
                }
            })
        }

```
**-2** I wanted to make a dynamic title with every page so I searched and came up with a library in React `react-document-title` that does that instead of the traditional JavaScript solution .
