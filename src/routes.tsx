import DashboardIcon from '@material-ui/icons/Dashboard';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

import Dashboard from './pages/dashboard.component';
import NoteLearning from './pages/noteLearning.component';

export interface IRoute {
	path: string;
	name: string;
	component: any;
	icon: any;
}

const Routes: IRoute[] = [
	{
		path: '/',
		name: 'Dashboard',
		component: Dashboard,
		icon: DashboardIcon,
	},
	{
		path: '/note-learning',
		name: 'Note Learning',
		component: NoteLearning,
		icon: MusicNoteIcon,
	},
];

export default Routes;
