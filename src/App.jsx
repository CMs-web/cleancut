import Navbar from "./components/Navbar";
import AppLayout from "./components/AppLayout";
import Upload from "./pages/Upload";
import { ImageProvider } from "./Provider/ImageProvider";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <ImageProvider>
        <Navbar />
        <AppLayout>
          <Upload />
        </AppLayout>
        <Footer/>
      </ImageProvider>
    </>
  );
}

export default App;
