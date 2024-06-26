import {RouteProps} from "react-router-dom"
import React from "react";
import {Main, MangaDescriptionContent, MangaContent, MangaTops} from "../../../../1pages";
import {Create} from "../../../../1pages/Create";
import NotFound from "../../../../1pages/NotFound/NotFound";
import {Catalog} from "../../../../1pages/Catalog";
import {PushCurd} from "../../../../1pages/Push/PushCard";
import {UserRoom} from "../../../../1pages/UserRoom";

enum AppRoutes {
    MAIN = "main",
    NOT_FOUND = "not_found",
    MANGADESCRIPTIONCONTENT = "cardmanga",
    MANGACONTENT = "mangaContent",
    MANGATOPS = "mangaTops",
    CREATE = "create",
    CATALOG = "catalog",
    PUSH = "push",
    USERROOM = "userRoom"
}

export type AppRouteProps = RouteProps & {}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.MANGADESCRIPTIONCONTENT]: "/manga/:itemId/:mode/:scroll",
    [AppRoutes.MANGACONTENT]: "/mangaContent/:mangaId/:chapter/:number",
    [AppRoutes.MANGATOPS]: "/mangaTops",
    [AppRoutes.CREATE]: "/manga/create",
    [AppRoutes.CATALOG]: "/catalog",
    [AppRoutes.PUSH]: "/manga/pu sh",
    [AppRoutes.USERROOM]: "/manga/userRoom",


    //last
    [AppRoutes.NOT_FOUND]: "*"
};


export const routerConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <Main/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.not_found,
        element: <NotFound/>
    },
    [AppRoutes.MANGADESCRIPTIONCONTENT]: { // Динамический путь с параметром маршрута
        path: RoutePaths.cardmanga,
        element: <MangaDescriptionContent/>
    },
    [AppRoutes.MANGACONTENT]: { // Динамический путь с параметром маршрута
        path: RoutePaths.mangaContent,
        element: <MangaContent/>
    },
    [AppRoutes.MANGATOPS]: {
        path: RoutePaths.mangaTops,
        element: <MangaTops/>
    },
    [AppRoutes.CREATE]: {
        path: RoutePaths.create,
        element: <Create/>
    },
    [AppRoutes.CATALOG]: {
        path: RoutePaths.catalog,
        element: <Catalog/>
    },
    [AppRoutes.PUSH]: {
        path: RoutePaths.push,
        element: <PushCurd/>
    },
    [AppRoutes.USERROOM]: {
        path: RoutePaths.userRoom,
        element: <UserRoom/>
    }
};