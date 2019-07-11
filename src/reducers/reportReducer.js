import { reportState } from './initState';

export default function reducer(report = reportState, {type, payload}) {
  switch (type) {
    default:
      return report
  }
}