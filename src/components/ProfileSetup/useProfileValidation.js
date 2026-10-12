import { useState } from 'react';
import { validateProfile, getFieldStepIndex, highlightField } from './profileValidation';

const STEP_ELEMENT_MAP = {
  0: 'candidate-name-input',
  1: 'candidate-phone-input',
  2: 'candidate-stream-select',
  3: 'candidate-target-year'
};

export function useProfileValidation(profile, jumpToStep) {
  const [errors, setErrors] = useState({});
  const [showErrorModal, setShowErrorModal] = useState(false);

  const validate = () => {
    const errs = validateProfile(profile);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setShowErrorModal(true);
      return false;
    }
    setShowErrorModal(false);
    return true;
  };

  const handleFocusFirstError = () => {
    const stepIdx = getFieldStepIndex(errors);
    if (stepIdx !== -1) {
      if (jumpToStep) jumpToStep(stepIdx);
      const targetId = STEP_ELEMENT_MAP[stepIdx];
      if (targetId) setTimeout(() => highlightField(targetId), 200);
    }
  };

  const clearError = (field) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return {
    errors, showErrorModal, setShowErrorModal,
    validate, handleFocusFirstError, clearError
  };
}
