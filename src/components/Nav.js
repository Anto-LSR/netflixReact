import style from './Nav.module.css'

function Nav() {
    return (
        <header>
            <nav>
                <img className={style.logo}
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
                     alt=""/>
                <img className={style.profile} src="profileIcon.jpg" alt=""/>
            </nav>

        </header>

    );
}

export default Nav;