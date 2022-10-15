import Styles from './styles.module.scss'


function Container ({children, size}) {
  const classes = [];
  classes[classes.length] = Styles['container'];
  if(size && Styles[`size--${size}`]) {
    classes[classes.length] = Styles[`size--${size}`];
  }
  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  )
}

export default Container;