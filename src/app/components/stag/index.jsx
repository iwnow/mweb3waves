import React from 'react';

import classNames from '../../utils/classNames';

export default (props) =>

<div className="control">
    <div className="tags has-addons">
        <span className={classNames('tag', props.nameClass ? props.nameClass : 'is-dark')}>{props.name}</span>
        <span className={classNames('tag', props.descClass ? props.descClass : 'is-info')}>{props.desc}</span>
    </div>
</div>