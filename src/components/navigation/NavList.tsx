import {A, useLocation} from "solid-start";
import {routes} from "~/components/navigation/routes";

export default function NavList() {
    const location = useLocation();
    const active = (path: string) => path == location.pathname ? "border-sky-600" : "border-transparent hover:border-sky-600";



    return (<nav class="bg-sky-800">
        <ul class="container flex items-center p-3 text-gray-200">
            {routes.map(route =>
                <li class={`border-b-2 ${active(route.href)} mx-1.5 sm:mx-6`}>
                    <A href="/">Home</A>
                </li>
            )}
        </ul>

    </nav>)
}