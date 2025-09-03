import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FabricaComissoes from "./pages/articles/FabricaComissoes";
import ShortsVirais from "./pages/articles/ShortsVirais";
import ReceitasBolos from "./pages/articles/ReceitasBolos";
import MarketingDigital from "./pages/categories/MarketingDigital";
import Receitas from "./pages/categories/Receitas";
import Milhas from "./pages/categories/Milhas";
import Negocios from "./pages/categories/Negocios";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Artigos */}
          <Route path="/fabrica-de-comissoes" element={<FabricaComissoes />} />
          <Route path="/shorts-virais" element={<ShortsVirais />} />
          <Route path="/700-receitas-bolos" element={<ReceitasBolos />} />
          
          {/* Categorias */}
          <Route path="/categoria/marketing-digital" element={<MarketingDigital />} />
          <Route path="/categoria/receitas" element={<Receitas />} />
          <Route path="/categoria/milhas" element={<Milhas />} />
          <Route path="/categoria/negocios" element={<Negocios />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
