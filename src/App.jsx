import Header from "./components/Header";
import Footer from "./components/Footer";
import JobsList from "./layouts/Jobs/JobsList";

const App = () => {
  return (
    <div className="bg-teal-50 min-h-screen font-spartan">
      <div className="mb-8">
        <Header />
      </div>
      <div class="max-w-[95%] mx-auto p-0 xs:p-0 sm:p-6">
        <JobsList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
