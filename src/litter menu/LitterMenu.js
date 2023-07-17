import React from 'react'

import Header from './Header';
import TabList from './TabList';
import {
  LitterOverview,
  VetInfo,
  WeightInput,
  Kittens,
  Settings
} from './sections'

import './LitterMenu.scss';

const LitterMenu = ({ litterName }) => {
  const [activeSection, setActiveSection] = React.useState('Litter Overview')
  var sections = {
    'Litter Overview': {
      name: 'Litter Overview',
      component: LitterOverview()
    },
    'Vet Info': {
      name: 'Vet Info',
      component: VetInfo()
    },
    'Weight Input': {
      name: 'Weight Input',
      component: WeightInput()
    },
    'Kittens': {
      name: 'Kittens',
      component: Kittens()
    },
    'Settings': {
      name: 'Settings',
      component: Settings()
    }
  }

  const changeSection = (newSection) => {
    setActiveSection(newSection)
  }

  return (
    <div className="litter_menu">
      <Header litterName={litterName}/>
      <TabList sections={sections} activeSection={activeSection} onChange={changeSection} />
      <div className='section'>
        {sections[activeSection].component}
      </div>
    </div>
  );
}

export default LitterMenu;
