import "./App.css";
import ListChurchComponent from "./components/Churches/ListChurchComponent";
import HeaderComponent from "./components/HeaderComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexComponent from "./components/IndexComponent";
import ChurchComponent from "./components/Churches/ChurchComponent";
import ListMemberComponent from "./components/Members/ListMemberComponent";
import MemberComponent from "./components/Members/MemberComponent";
import ListStudyComponent from "./components/Studies/ListStudyComponent";
import StudyComponent from "./components/Studies/StudyComponent";
import ListOccasionComponent from "./components/Occasions/ListOccasionComponent";
import OccasionComponent from "./components/Occasions/OccasionComponent";
import ListPrayComponent from "./components/Prayers/ListPrayComponent";
import PrayComponent from "./components/Prayers/PrayComponent";
import ListFinancialComponent from "./components/Financial/ListFinancialComponent";
import FinancialComponent from "./components/Financial/FinancialComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/*http://localhost:5173 */}
          <Route path="/" element={<IndexComponent />}></Route>
          {/*http://localhost:5173/churches */}
          <Route path="/churches" element={<ListChurchComponent />}></Route>
          {/* http://localhost:5173/add-church */}
          <Route path="/add-churches" element={<ChurchComponent />}></Route>
          {/* //localhost:5173/edit-church/1 */}
          <Route path="/edit-church/:id" element={<ChurchComponent />}></Route>
          {/*http://localhost:5173/members */}
          <Route path="/members" element={<ListMemberComponent />}></Route>
          {/* http://localhost:5173/add-member */}
          <Route path="/add-member" element={<MemberComponent />}></Route>
          {/* //localhost:5173/edit-member/1 */}
          <Route path="/edit-member/:id" element={<MemberComponent />}></Route>
          {/*http://localhost:5173/study */}
          <Route path="/study" element={<ListStudyComponent />}></Route>
          {/* http://localhost:5173/add-study */}
          <Route path="/add-study" element={<StudyComponent />}></Route>
          {/* //localhost:5173/edit-study/1 */}
          <Route path="/edit-study/:id" element={<StudyComponent />}></Route>
          {/*http://localhost:5173/occasions */}
          <Route path="/occasions" element={<ListOccasionComponent />}></Route>
          {/* http://localhost:5173/add-occasion */}
          <Route path="/add-occasion" element={<OccasionComponent />}></Route>
          {/* //localhost:5173/edit-occasion/1 */}
          <Route
            path="/edit-occasion/:id"
            element={<OccasionComponent />}
          ></Route>

          {/*http://localhost:5173/prayers */}
          <Route path="/prayers" element={<ListPrayComponent />}></Route>
          {/* http://localhost:5173/add-pray */}
          <Route path="/add-pray" element={<PrayComponent />}></Route>
          {/* //localhost:5173/edit-pray/1 */}
          <Route path="/edit-pray/:id" element={<PrayComponent />}></Route>

          {/*http://localhost:5173/financial */}
          <Route path="/financial" element={<ListFinancialComponent />}></Route>

          {/* http://localhost:5173/add-financial */}
          <Route path="/add-financial" element={<FinancialComponent />}></Route>

          {/* //localhost:5173/edit-financial/1 */}
          <Route
            path="/edit-financial/:id"
            element={<FinancialComponent />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
