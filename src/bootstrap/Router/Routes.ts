import { RouteType } from "./types";
import AddActivity from "../../pages/login";
import UsersPage from "../../pages/users";
import ActivitiesPage from "../../pages/activities";
import AirportsPage from "../../pages/airports";
import BusStationsPage from "../../pages/busStations";
import FlightsPage from "../../pages/airports/flights";
import ToursPage from "../../pages/tours";
import CitiesPage from "../../pages/cities";
import HotelsPage from "../../pages/hotels";
import ActivityDetail from "../../pages/activities/activityDetail";
import UserDetail from "../../pages/users/userDetail";

const RouterList: RouteType[] = [
  { Page: AddActivity, path: "/login", pageType: "public" },
  { Page: UsersPage, path: "/users", pageType: "protected" },
  { Page: ActivitiesPage, path: "/activities", pageType: "protected" },
  { Page: AirportsPage, path: "/airports", pageType: "protected" },
  { Page: FlightsPage, path: "/flights", pageType: "protected" },
  { Page: BusStationsPage, path: "/busStations", pageType: "protected" },
  { Page: ToursPage, path: "/tours", pageType: "protected" },
  { Page: CitiesPage, path: "/cities", pageType: "protected" },
  { Page: HotelsPage, path: "/hotels", pageType: "protected" },
  { Page: ActivityDetail, path: "/activities/:id", pageType: "protected" },
  { Page: UserDetail, path: "/users/:id", pageType: "protected" },
];

export default RouterList;
