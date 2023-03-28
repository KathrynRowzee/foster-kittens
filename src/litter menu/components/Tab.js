import classnames from 'classnames'
import './Tab.css'

const Tab = ({tabName, selected=false, onChange}) => {
  const onClick = () => {
    onChange(tabName)
  }
  
  return (
    <div className={classnames('tab',{selected: selected})} onClick={onClick} >
      <span>{tabName}</span>
    </div>
  )
}

export default Tab