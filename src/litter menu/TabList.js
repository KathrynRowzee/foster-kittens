import Tab from './components/Tab'

const TabList = ({sections, activeSection, onChange}) => {
  return (
    <nav id='tab_list'>
      {Object.keys(sections).map((key) => (
        <Tab tabName={sections[key].name} selected={sections[key].name === activeSection} onChange={onChange} />
      ))}
    </nav>
  )
}

export default TabList