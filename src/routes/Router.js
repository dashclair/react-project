import { Route, Routes } from "react-router-dom"
import CounterContainer from "../pages/Counter/containers/CounterContainer"
import CountersManagerContainer from "../pages/CountersManager/containers/CountersManagerContainer"
import FunctionalCounterContainer from "../pages/FunctionalCounter/containers/FunctionalCounterContainer"
import CheckListContainer from "../pages/CheckList/containers/CheckListContainer"
import { ROUTE_NAMES } from "./routeNames"

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTE_NAMES.HOME} element={<h1>Home page</h1>}/>
            <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer/>}/>
            <Route path={ROUTE_NAMES.FUNCTIONAL_COUNTER} element={<FunctionalCounterContainer/>}/>
            <Route path={ROUTE_NAMES.COUNTERS_MANAGER} element={<CountersManagerContainer/>}/>
            <Route path={ROUTE_NAMES.CHECK_LIST} element={<CheckListContainer/>}/>
        </Routes>
    )
}

export default Router