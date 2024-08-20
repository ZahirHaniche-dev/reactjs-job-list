import Header from "./components/Header";
import Footer from "./components/Footer";
import Filter from "./layouts/Filter/Filter";
import JobList from "./layouts/Jobs/JobList";

const App = () => {
  return (
    <div className="bg-teal-50 min-h-screen font-spartan">
      <div className="mb-8">
        <Header />
      </div>
      <div className="max-w-[80%] mx-auto p-6">
        <Filter />
        <JobList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
