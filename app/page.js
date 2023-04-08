import MultistepWizard from "./components/multistep_wizard";
import PageHeader from "./components/page_header";

const Main = ({ children }) => {
  return (
    <main className="mx-auto flex max-w-[1400px] flex-col space-y-24">
      {children}
    </main>
  );
};

export default function Home() {
  return (
    <Main>
      <PageHeader />
      <section className="grid grid-cols-3 gap-8">
        <MultistepWizard />
      </section>
    </Main>
  );
}
