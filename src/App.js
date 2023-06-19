
import './App.css';
import ClassClick from './components/ClassClick';
import ConditionalRendering from './components/ConditionalRendering';
import FunctionalClick from './components/FunctionalClick';
import ListRendering from './components/ListRendering';
import Navbar from './components/Navbar';
import ParentComponent from './components/ParentComponent';
import Welcome from './components/welcome';
import StyleSheet from './components/StyleSheet';
import CLassLifeCycleA from './components/CLassLifeCycleA';
import CLassLifeCycleB from './components/CLassLifeCycleB';
import FormComponent from './components/FormComponent'
import Fragment from './components/Fragment';
import PureComp from './components/PureComp';
import RegularComp from './components/RegularComp';
import PositionsinCSS from './components/PositionsinCSS';
import Hooks from './components/Hooks';
import StudentDashboard from './student/StudentDashboard';
import Notification from './student/Notification';
import ClassCounter from './components/ClassCounter';

function App() {
  return (
    <div className="App">
    {/* <Welcome name="Abdul Rehman"><p>This is demo paragraph</p></Welcome> */}
    {/* <FunctionalClick /> */}
    {/* <ClassClick /> */}
    {/* <ParentComponent /> */}
    {/* <ConditionalRendering /> */}
    {/* <ListRendering /> */}
    {/* <StyleSheet /> */}
    {/* <CLassLifeCycleA /> */}
    {/* <CLassLifeCycleB /> */}
    {/* <FormComponent /> */}
    {/* <PureComp />
    <RegularComp /> */}
    {/* <PositionsinCSS /> */}
    {/* <Hooks /> */}
    {/* <StudentDashboard /> */}
    {/* {<Notification/>} */}
    <ClassCounter/>
    </div>
  );
}

export default App;
