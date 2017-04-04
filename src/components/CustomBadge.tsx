import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import * as React from 'react';
import {StatelessComponent} from 'react';

interface ICustomBadgeProps {
  badgeContent?: number;
}

const CustomBadge: StatelessComponent<ICustomBadgeProps> = (props) => (
  <Badge
    badgeContent={ props.badgeContent }
    primary={true}
  >
    <NotificationsIcon />
  </Badge>
);

export default CustomBadge;
