import { IFretboardCell } from './IFretboardCell';
export interface IFretboardRow {
	openNote: string;
	frets: IFretboardCell[];
}
