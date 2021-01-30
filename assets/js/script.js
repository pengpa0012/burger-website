

const navBurger = document.querySelector('.burger')
const navContent = document.querySelector('header nav ul')
const navList = document.querySelectorAll('header nav ul li')


class toggleNav{
    constructor(burger, navList, navLink){
        this.burger = burger
        this.navList = navList
        this.navLink = navLink
    }

    toggler(){
        this.burger.addEventListener('click', ()=>{
            this.navList.classList.toggle('active')
        })

        this.navLink.forEach(li => {
            li.addEventListener('click', () => {
                this.navList.classList.toggle('active')
            })
        });
    }
}

const navToggler = new toggleNav(navBurger, navContent, navList)

navToggler.toggler()
