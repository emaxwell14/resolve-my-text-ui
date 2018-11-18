/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */
import React, { Component, Node } from 'react';
import classnames from 'classnames';
import styles from './styles.scss';

/* ******************************** */
/* *********** PRIVATE ************ */
/* ******************************** */

/* ******************************** */
/* ********** COMPONENT *********** */
/* ******************************** */
type Props = {
  values: Array<string>,
  count: number,
  formatter: (Array<string>) => Array<Node>,
};

type State = {
  displayedValues: Array<Node>,
};

/**
 * Infinite scroll to improve page responsiveness for a large list of data
 * An initial set of values is loaded and formatted.
 * When the bottom of the scrollbar is reached, additional values are loaded.
 */
class InfiniteScroll extends Component<Props, State> {
  state = {
    displayedValues: [],
  };

  componentDidMount() {
    this.updateCurrentValues();
  }

  /**
   * On scroll checking if the bottom of the scrollable area has been reached
   */
  handleScroll = ({ target: { scrollHeight, scrollTop, clientHeight } }) => {
    const bottom = Math.round(scrollHeight - scrollTop) === clientHeight;
    if (bottom) {
      this.updateCurrentValues();
    }
  };

  /**
   * Gets the next set of values to be loaded in the infinite scroll.
   * Formats them and appends them to the currently dispayed values.
   */
  updateCurrentValues = () => {
    const { values, count, formatter } = this.props;
    const { displayedValues } = this.state;

    const currentOffset = displayedValues.length;

    if (values.length > currentOffset) {
      const newOffset = currentOffset + count;
      const newValues = values.slice(currentOffset, newOffset);
      const newDisplayValues = displayedValues.concat(formatter(newValues));

      this.setState({ displayedValues: newDisplayValues });
    }
  };

  /**
   * Setting a dom listener on load of the component
   */
  scrollRef = node => {
    if (node) {
      node.addEventListener('scroll', this.handleScroll);
    }
  };

  render() {
    const { values } = this.props;
    const { displayedValues } = this.state;
    return (
      <div ref={this.scrollRef} onScroll={this.handleScroll}>
        <div className={classnames(['d-flex flex-wrap', styles.infiniteScroll])}>{displayedValues}</div>
        <div className="pt-1">{`Showing ${displayedValues.length} of ${values.length}`}</div>
      </div>
    );
  }
}

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default InfiniteScroll;
