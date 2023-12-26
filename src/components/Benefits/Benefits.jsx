const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container container--pall">
        <div className="benefits__single-platform flex flex-ai-c gap">
          <div className="benefits__image1 img"></div>
          <div className="benefits__content">
            <h2>
              Enjoy the benefits of having everything in a single platform
            </h2>
            <p>Save on your tech stack with one HR and payroll platform</p>
            <p>Reduce onboarding time to just 5 minutes</p>
            <p>Eliminate errors and duplicate work with one process</p>
            <p>Get a holistic view of employer costs, headcount and churn</p>
            <p>Give your whole team a consistent experience</p>
            <button>Get Started For Free</button>
          </div>
        </div>

        <div className="benefits__global-team flex flex-ai-c gap">
          <div className="benefits__content">
            <h2>Run compliant payroll for your global team in minutes</h2>
            <p>Pay contractors, EORs, and direct employees on autopilot</p>
            <p>We handle taxes, provide benefits, payslips, and way more</p>
            <p>Eliminate admin with automated contractor invoicing</p>
            <p>Give your team flexibility with 15+ global payment options</p>
            <p>Local, legal, tax, and accounting expertise just a click away</p>
            <button>Get Started For Free</button>
          </div>
          <div className="benefits__image2 img"></div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
