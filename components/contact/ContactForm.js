import styles from "./ContactForm.module.css";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response.ok) {
        router.push("/");
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Talk to sales</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={styles.formFieldSet}>
          <div className={styles.row}>
            <label htmlFor="firstname" className={styles.formField}>
              <span className={styles.labelWrapper}>
                <span className={styles.label}>First name</span>
              </span>
              <div className={styles.inputWrapper}>
                <div className={styles.inputField}>
                  <input
                    {...register("firstname", {
                      required: true,
                      maxLength: 20,
                    })}
                    id="firstname"
                    name="firstname"
                    type="text"
                    aria-invalid={errors.firstname ? "true" : "false"}
                    className={styles.input}
                  ></input>
                  {errors.firstname && errors.firstname.type === "required" && (
                    <span className={styles.alert} role="alert">
                      Er is geen voornaam ingevuld
                    </span>
                  )}
                  {errors.firstname &&
                    errors.firstname.type === "maxLength" && (
                      <span className={styles.alert} role="alert">
                        Maximale lengte is 20 karakters
                      </span>
                    )}
                </div>
              </div>
            </label>

            <label htmlFor="lastname" className={styles.formField}>
              <span className={styles.labelWrapper}>
                <span className={styles.label}>Last name</span>
              </span>
              <div className={styles.inputWrapper}>
                <div className={styles.inputField}>
                  <input
                    {...register("lastname", { required: true, maxLength: 20 })}
                    id="lastname"
                    type="text"
                    aria-invalid={errors.lastname ? "true" : "false"}
                    className={styles.input}
                  ></input>
                  {errors.lastname && errors.lastname.type === "required" && (
                    <span className={styles.alert} role="alert">
                      Er is geen achternaam ingevuld
                    </span>
                  )}
                  {errors.lastname && errors.lastname.type === "maxLength" && (
                    <span className={styles.alert} role="alert">
                      Maximale lengte is 20 karakters
                    </span>
                  )}
                </div>
              </div>
            </label>
          </div>

          <div className={styles.row}>
            <label htmlFor="email" className={styles.formField}>
              <span className={styles.labelWrapper}>
                <span className={styles.label}>Work email</span>
              </span>
              <div className={styles.inputWrapper}>
                <div className={styles.inputField}>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                    id="email"
                    name="email"
                    type="email"
                    aria-invalid={errors.email ? "true" : "false"}
                    className={styles.input}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <span className={styles.alert} role="alert">
                      Er is geen e-mailadres ingevuld
                    </span>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <span className={styles.alert} role="alert">
                      Er is geen geldig e-mailadres ingevuld. Controleer of het
                      e-mailadres een @ en een punt bevat.
                    </span>
                  )}
                </div>
              </div>
            </label>

            <label htmlFor="phone" className={styles.formField}>
              <span className={styles.labelWrapper}>
                <span className={styles.label}>Work phone</span>
              </span>
              <div className={styles.inputWrapper}>
                <div className={styles.inputField}>
                  <input
                    {...register("phone", {
                      required: true,
                      pattern: /^(\+)?([ 0-9()-]){10,16}$/g,
                    })}
                    id="phone"
                    name="phone"
                    type="phone"
                    className={styles.input}
                  />
                  {errors.phone && errors.phone.type === "required" && (
                    <span className={styles.alert} role="alert">
                      Er is geen telefoonnummer ingevuld
                    </span>
                  )}
                  {errors.phone && errors.phone.type === "pattern" && (
                    <span className={styles.alert} role="alert">
                      Er is geen geldig telefoonnummer ingevuld
                    </span>
                  )}
                </div>
              </div>
            </label>
          </div>

          <div className={styles.row}>
            <label htmlFor="company" className={styles.formField}>
              <span className={styles.labelWrapper}>
                <span className={styles.label}>Company</span>
              </span>
              <div className={styles.inputWrapper}>
                <div className={styles.inputField}>
                  <input
                    {...register("company")}
                    id="company"
                    name="company"
                    type="text"
                    className={styles.input}
                  />
                </div>
              </div>
            </label>

            <label htmlFor="role" className={styles.formField}>
              <span className={styles.labelWrapper}>
                <span className={styles.label}>Role</span>
              </span>
              <div className={styles.inputWrapper}>
                <div className={styles.inputField}>
                  <input
                    {...register("role")}
                    id="role"
                    name="role"
                    type="text"
                    className={styles.input}
                  />
                </div>
              </div>
            </label>
          </div>
          <label htmlFor="message" className={styles.formField}>
            <span className={styles.labelWrapper}>
              <span className={styles.label}>Message</span>
            </span>
            <div className={styles.inputWrapper}>
              <div className={styles.inputField}>
                <textarea
                  {...register("message")}
                  id="message"
                  name="message"
                  rows="6"
                  className={styles.input}
                />
              </div>
            </div>
          </label>
        </fieldset>
        <div className={styles.footer}>
          <div className={styles.buttonWrapper}>
            <button
              type="submit"
              disabled={loading}
              className={`${styles.button} ${styles.buttonArrow}`}
            >
              {loading ? (
                <div className={styles.loadingDots}>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                </div>
              ) : (
                <>
                  <span>Neem contact met ons op</span>
                  <svg
                    viewBox="0 0 6 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.arrowIcon}
                  >
                    <g className={styles.chevron}>
                      <path
                        d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </g>
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
