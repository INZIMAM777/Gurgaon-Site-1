import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PostProperty from "./pages/PostProperty";
import SearchResults from "./pages/SearchResults";
import MoreProjects from "./pages/MoreProjects";
import PgCoLiving from "./pages/PgCoLiving";
import Commercial from "./pages/Commercial";
import PopularAreas from "./pages/PopularAreas";
import Insights from "./pages/Insights";
import ArticlesNews from "./pages/ArticlesNews";
import Flats from "./pages/Flats";
import BuilderFloors from "./pages/BuilderFloors";
import IndependentHouse from "./pages/IndependentHouse";
import ServicedApartments from "./pages/ServicedApartments";
import StudioApartments1RKFlats from "./pages/StudioApartments1RKFlats";
import PropertyForRentInBangaloreEast from "./pages/PropertyForRentInBangaloreEast";
import VerifiedPropertyInBangaloreEast from "./pages/VerifiedPropertyInBangaloreEast";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Switch>
          <Route path="/" component={Index} />
          <Route path="/post-property" component={PostProperty} />
          <Route path="/search" component={SearchResults} />
          <Route path="/more-projects" component={MoreProjects} />
          <Route path="/pg-co-living" component={PgCoLiving} />
          <Route path="/commercial" component={Commercial} />
          <Route path="/popular-areas" component={PopularAreas} />
          <Route path="/insights" component={Insights} />
          <Route path="/articles-news" component={ArticlesNews} />
          <Route path="/flats" component={Flats} />
          <Route path="/builder-floors" component={BuilderFloors} />
          <Route path="/independent-house" component={IndependentHouse} />
          <Route path="/serviced-apartments" component={ServicedApartments} />
          <Route path="/studio-apartments-1-rk-flats" component={StudioApartments1RKFlats} />
          <Route path="/property-for-rent-in-bangalore-east" component={PropertyForRentInBangaloreEast} />
          <Route path="/verified-property-in-bangalore-east" component={VerifiedPropertyInBangaloreEast} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
