import React from 'react'

const Services = () => {
  return (
    <div className="mb-10" id="services">
      {/* Container */}
      <Container fluid={true}>
        {/* Layout */}
        <div className="m-2">
          {/* Content */}

          <div className="pb-4">
            {/* Section Heading & Intro */}
            <h2 className="text-3xl lg:text-5xl font-h2 pb-2 text-primary dark:text-white text-center ">
              Facilities & Services
            </h2>
            <p className="text-xl text-center font-subHeading text-primary dark:text-gray-400 font-extralight pb-10">
              Scriptorem per nibh euripidis usu. Magna feugiat in nec.
            </p>
          </div>

          {/* Services */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
            {/* Wifi */}
            <ServicesList
              icon={<BiWifi />}
              header="High Speed Wifi"
              para="Scripta apeirian in his. Quo accusamus complectitur
                  consectetuer eu, errem adipisci ocurreret an per"
            />

            {/* Parking */}
            <ServicesList
              icon={<FaCarAlt />}
              header="Parking Space"
              para="Scripta apeirian in his. Quo accusamus complectitur
                  consectetuer eu, errem adipisci ocurreret an per"
            />

            {/* Swimming */}
            <ServicesList
              icon={<FaSwimmingPool />}
              header="Swimming Pool"
              para="Scripta apeirian in his. Quo accusamus complectitur
                  consectetuer eu, errem adipisci ocurreret an per"
            />

            {/* Restaurant */}
            <ServicesList
              icon={<BiDish />}
              header="Restaurant & Bar"
              para="Scripta apeirian in his. Quo accusamus complectitur
                  consectetuer eu, errem adipisci ocurreret an per"
            />

            {/* Spa */}
            <ServicesList
              icon={<GiSpotedFlower />}
              header="Spa Center"
              para="Scripta apeirian in his. Quo accusamus complectitur
                  consectetuer eu, errem adipisci ocurreret an per"
            />

            {/* Fitness */}
            <ServicesList
              icon={<GiMuscleUp />}
              header="Fitness Center"
              para="Scripta apeirian in his. Quo accusamus complectitur
                  consectetuer eu, errem adipisci ocurreret an per"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services