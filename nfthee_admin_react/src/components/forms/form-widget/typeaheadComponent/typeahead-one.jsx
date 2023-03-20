import React, { Fragment,useRef } from 'react';
import options from '../../../../data/typeaheadData';
import { Typeahead } from 'react-bootstrap-typeahead';
import {ButtonToolbar,Button} from 'react-bootstrap';

const TypeaheadOne = () =>  {
        const ref = useRef();
        return (
          <Fragment>
            <Typeahead
              id="public-typeahead"
              defaultSelected={options.slice(0, 4)}
              labelKey="name"
              multiple
              options={options}
              placeholder="Choose a state..."
              ref={ref}
            />
            <ButtonToolbar style={{marginTop: '10px',margin:'4px'}}>
              <Button
                className="m-2"
                onClick={() => ref.current.clear()}>
                Clear
              </Button>
              <Button
                className="m-2"
                onClick={() => ref.current.focus()}>
                Focus
              </Button>
              <Button
                className="m-2" 
                onClick={() => {
                  ref.current.focus();
                  setTimeout(() => ref.current.blur(), 1000);
                }}
                >
                Focus, then blur after 1 second
              </Button>
            </ButtonToolbar>
          </Fragment>
        );
      }

export default TypeaheadOne;