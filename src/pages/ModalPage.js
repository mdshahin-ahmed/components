import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum maiores
        esse rem natus consequuntur quidem ratione libero ipsa vero dolor optio,
        corporis veniam molestias tempore distinctio possimus eligendi magnam
        atque corrupti architecto sint quod praesentium! Quisquam distinctio
        dolorum enim fugiat corrupti ut voluptatum delectus repellat, debitis
        nulla, doloribus illo. Nemo, sapiente sunt expedita rerum numquam
        adipisci ex ut a architecto officia possimus tenetur vel, animi dolore
        exercitationem vitae corporis? Officia soluta quidem corporis nihil
        nobis quae fugit fugiat nesciunt? Velit, dolorum sed? Ut, repellat!
        Tenetur amet magnam dolorum reprehenderit neque voluptatibus debitis
        alias accusantium. Reprehenderit quaerat praesentium sequi maxime omnis.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum maiores
        esse rem natus consequuntur quidem ratione libero ipsa vero dolor optio,
        corporis veniam molestias tempore distinctio possimus eligendi magnam
        atque corrupti architecto sint quod praesentium! Quisquam distinctio
        dolorum enim fugiat corrupti ut voluptatum delectus repellat, debitis
        nulla, doloribus illo. Nemo, sapiente sunt expedita rerum numquam
        adipisci ex ut a architecto officia possimus tenetur vel, animi dolore
        exercitationem vitae corporis? Officia soluta quidem corporis nihil
        nobis quae fugit fugiat nesciunt? Velit, dolorum sed? Ut, repellat!
        Tenetur amet magnam dolorum reprehenderit neque voluptatibus debitis
        alias accusantium. Reprehenderit quaerat praesentium sequi maxime omnis.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum maiores
        esse rem natus consequuntur quidem ratione libero ipsa vero dolor optio,
        corporis veniam molestias tempore distinctio possimus eligendi magnam
        atque corrupti architecto sint quod praesentium! Quisquam distinctio
        dolorum enim fugiat corrupti ut voluptatum delectus repellat, debitis
        nulla, doloribus illo. Nemo, sapiente sunt expedita rerum numquam
        adipisci ex ut a architecto officia possimus tenetur vel, animi dolore
        exercitationem vitae corporis? Officia soluta quidem corporis nihil
        nobis quae fugit fugiat nesciunt? Velit, dolorum sed? Ut, repellat!
        Tenetur amet magnam dolorum reprehenderit neque voluptatibus debitis
        alias accusantium. Reprehenderit quaerat praesentium sequi maxime omnis.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum maiores
        esse rem natus consequuntur quidem ratione libero ipsa vero dolor optio,
        corporis veniam molestias tempore distinctio possimus eligendi magnam
        atque corrupti architecto sint quod praesentium! Quisquam distinctio
        dolorum enim fugiat corrupti ut voluptatum delectus repellat, debitis
        nulla, doloribus illo. Nemo, sapiente sunt expedita rerum numquam
        adipisci ex ut a architecto officia possimus tenetur vel, animi dolore
        exercitationem vitae corporis? Officia soluta quidem corporis nihil
        nobis quae fugit fugiat nesciunt? Velit, dolorum sed? Ut, repellat!
        Tenetur amet magnam dolorum reprehenderit neque voluptatibus debitis
        alias accusantium. Reprehenderit quaerat praesentium sequi maxime omnis.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum maiores
        esse rem natus consequuntur quidem ratione libero ipsa vero dolor optio,
        corporis veniam molestias tempore distinctio possimus eligendi magnam
        atque corrupti architecto sint quod praesentium! Quisquam distinctio
        dolorum enim fugiat corrupti ut voluptatum delectus repellat, debitis
        nulla, doloribus illo. Nemo, sapiente sunt expedita rerum numquam
        adipisci ex ut a architecto officia possimus tenetur vel, animi dolore
        exercitationem vitae corporis? Officia soluta quidem corporis nihil
        nobis quae fugit fugiat nesciunt? Velit, dolorum sed? Ut, repellat!
        Tenetur amet magnam dolorum reprehenderit neque voluptatibus debitis
        alias accusantium. Reprehenderit quaerat praesentium sequi maxime omnis.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum maiores
        esse rem natus consequuntur quidem ratione libero ipsa vero dolor optio,
        corporis veniam molestias tempore distinctio possimus eligendi magnam
        atque corrupti architecto sint quod praesentium! Quisquam distinctio
        dolorum enim fugiat corrupti ut voluptatum delectus repellat, debitis
        nulla, doloribus illo. Nemo, sapiente sunt expedita rerum numquam
        adipisci ex ut a architecto officia possimus tenetur vel, animi dolore
        exercitationem vitae corporis? Officia soluta quidem corporis nihil
        nobis quae fugit fugiat nesciunt? Velit, dolorum sed? Ut, repellat!
        Tenetur amet magnam dolorum reprehenderit neque voluptatibus debitis
        alias accusantium. Reprehenderit quaerat praesentium sequi maxime omnis.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum maiores
        esse rem natus consequuntur quidem ratione libero ipsa vero dolor optio,
        corporis veniam molestias tempore distinctio possimus eligendi magnam
        atque corrupti architecto sint quod praesentium! Quisquam distinctio
        dolorum enim fugiat corrupti ut voluptatum delectus repellat, debitis
        nulla, doloribus illo. Nemo, sapiente sunt expedita rerum numquam
        adipisci ex ut a architecto officia possimus tenetur vel, animi dolore
        exercitationem vitae corporis? Officia soluta quidem corporis nihil
        nobis quae fugit fugiat nesciunt? Velit, dolorum sed? Ut, repellat!
        Tenetur amet magnam dolorum reprehenderit neque voluptatibus debitis
        alias accusantium. Reprehenderit quaerat praesentium sequi maxime omnis.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum maiores
        esse rem natus consequuntur quidem ratione libero ipsa vero dolor optio,
        corporis veniam molestias tempore distinctio possimus eligendi magnam
        atque corrupti architecto sint quod praesentium! Quisquam distinctio
        dolorum enim fugiat corrupti ut voluptatum delectus repellat, debitis
        nulla, doloribus illo. Nemo, sapiente sunt expedita rerum numquam
        adipisci ex ut a architecto officia possimus tenetur vel, animi dolore
        exercitationem vitae corporis? Officia soluta quidem corporis nihil
        nobis quae fugit fugiat nesciunt? Velit, dolorum sed? Ut, repellat!
        Tenetur amet magnam dolorum reprehenderit neque voluptatibus debitis
        alias accusantium. Reprehenderit quaerat praesentium sequi maxime omnis.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum maiores
        esse rem natus consequuntur quidem ratione libero ipsa vero dolor optio,
        corporis veniam molestias tempore distinctio possimus eligendi magnam
        atque corrupti architecto sint quod praesentium! Quisquam distinctio
        dolorum enim fugiat corrupti ut voluptatum delectus repellat, debitis
        nulla, doloribus illo. Nemo, sapiente sunt expedita rerum numquam
        adipisci ex ut a architecto officia possimus tenetur vel, animi dolore
        exercitationem vitae corporis? Officia soluta quidem corporis nihil
        nobis quae fugit fugiat nesciunt? Velit, dolorum sed? Ut, repellat!
        Tenetur amet magnam dolorum reprehenderit neque voluptatibus debitis
        alias accusantium. Reprehenderit quaerat praesentium sequi maxime omnis.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum maiores
        esse rem natus consequuntur quidem ratione libero ipsa vero dolor optio,
        corporis veniam molestias tempore distinctio possimus eligendi magnam
        atque corrupti architecto sint quod praesentium! Quisquam distinctio
        dolorum enim fugiat corrupti ut voluptatum delectus repellat, debitis
        nulla, doloribus illo. Nemo, sapiente sunt expedita rerum numquam
        adipisci ex ut a architecto officia possimus tenetur vel, animi dolore
        exercitationem vitae corporis? Officia soluta quidem corporis nihil
        nobis quae fugit fugiat nesciunt? Velit, dolorum sed? Ut, repellat!
        Tenetur amet magnam dolorum reprehenderit neque voluptatibus debitis
        alias accusantium. Reprehenderit quaerat praesentium sequi maxime omnis.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum maiores
        esse rem natus consequuntur quidem ratione libero ipsa vero dolor optio,
        corporis veniam molestias tempore distinctio possimus eligendi magnam
        atque corrupti architecto sint quod praesentium! Quisquam distinctio
        dolorum enim fugiat corrupti ut voluptatum delectus repellat, debitis
        nulla, doloribus illo. Nemo, sapiente sunt expedita rerum numquam
        adipisci ex ut a architecto officia possimus tenetur vel, animi dolore
        exercitationem vitae corporis? Officia soluta quidem corporis nihil
        nobis quae fugit fugiat nesciunt? Velit, dolorum sed? Ut, repellat!
        Tenetur amet magnam dolorum reprehenderit neque voluptatibus debitis
        alias accusantium. Reprehenderit quaerat praesentium sequi maxime omnis.
      </p>
    </div>
  );
};

export default ModalPage;
