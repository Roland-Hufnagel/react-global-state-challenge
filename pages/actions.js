import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ handleAllOn, handleAllOff, checkAllOn, checkAllOff }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions onAllOn={handleAllOn} onAllOff={handleAllOff} checkAllOn={checkAllOn} checkAllOff={checkAllOff}/>
    </>
  );
}
