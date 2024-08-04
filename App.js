import React, { useLayoutEffect } from 'react';
import './App.css';
import HealthSummary from './Components/HealthSummary';
import Sdohassessment from './Components/SdohAssessment';
import PatientView from './Components/PatientView';
import Badge from './Components/Badge';
import SidebarLayout from './Components/Sidebar-Layout';
import Table from './Components/Table';
import Textarea from './Components/Textarea';
import Button from './Components/Button';
import Text from './Components/Text';
import Input from './Components/Input';
import Checkbox from './Components/Checkbox';
import Radio from './Components/Radio';
import Select from './Components/Select';
import Switch from './Components/Switch';
import StackedLayout from './Components/Stacked-Layour';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Dropdown from './Components/Dropdown';
import Divider from './Components/Divider';
import Card from './Components/Card';
import Pagination from './Components/Pagination';
import Link from './Components/Link';
import Dialog from './Components/Dialog';
import Alert from './Components/Alert';
import Avatar from './Components/Avatar';
import DescriptionList from './Components/Description-List';
import Fieldset from './Components/Fieldset';
import Header from './Components/Header';
import Listbox from './Components/Listbox';
/**
 * The main entry point of the HealthTech Innovations application.
 * This component renders the header with the application title and several child components that display various health-related information.
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to HealthTech Innovations</h1>
        <HealthSummary />
        <Sdohassessment />
        <PatientView />
      </header>
    </div>
  );
}

export default App;
