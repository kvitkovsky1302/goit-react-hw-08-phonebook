import PropTypes from 'prop-types';
// import styles from './Section.module.css';

function Section(props) {
  const { title = '', children } = props;
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
