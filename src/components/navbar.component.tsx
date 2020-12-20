import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import clsx from 'clsx';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Routes from '../routes';
import useStyles from './navbar.styles';

const NavBar = (props: any) => {
	const classes = useStyles();

	const [open, setOpen] = React.useState(false);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};
	const activeRoute = (routeName: any) => {
		return props.location.pathname === routeName ? true : false;
	}

	return (
		<React.Fragment>
			<AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
				<Toolbar className={classes.toolbar}>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
					>
						<MenuIcon />
					</IconButton>
					<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
						Guitar Practice Tools
                    </Typography>
					<IconButton color="inherit">
						<Badge badgeContent={0} color="secondary">
							<NotificationsIcon />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				classes={{
					paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
				}}
				open={open}>
				<div className={classes.toolbarIcon}>
					<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
						Menu
                    </Typography>
					<IconButton onClick={handleDrawerClose} color="inherit">
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>
					{Routes.map((route, index) => {
						let listItem;
						if (open) {
							listItem = <ListItem button component={Link} to={route.path} key={index} color="secondary" selected={activeRoute(route.path)}>
								<ListItemIcon>
									<route.icon />
								</ListItemIcon>
								<ListItemText primary={route.name} />
							</ListItem>;
						} else {
							listItem = <Tooltip title={route.name} placement="right" key={index}>
								<ListItem button component={Link} to={route.path} color="secondary" selected={activeRoute(route.path)}>
									<ListItemIcon>
										<route.icon />
									</ListItemIcon>
									<ListItemText primary={route.name} />
								</ListItem>
							</Tooltip>;
						}

						return listItem;
					})}
				</List>
			</Drawer>
		</React.Fragment>
	);
}

export default withRouter(NavBar);
