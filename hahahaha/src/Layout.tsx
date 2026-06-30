import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <div>
            <header>
                <Link to="/">홈</Link>
                <Link to="/about">소개</Link>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>공통 푸터</footer>
        </div>
    );
}


export default Layout;