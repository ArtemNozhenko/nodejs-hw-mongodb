import { Router } from 'express';
import { upload } from '../middlewares/multer.js';

import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contact.js';
import { isValidId } from '../middlewares/isValidid.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.get('/', authenticate, ctrlWrapper(getContactsController));

router.get(
  '/:contactId',
  authenticate,
  isValidId,
  ctrlWrapper(getContactByIdController),
);

router.post(
  '/',
  authenticate,
  upload.single('photo'),
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.patch(
  '/:contactId',
  authenticate,
  isValidId,
  upload.single('photo'),
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);

router.delete(
  '/:contactId',
  authenticate,
  isValidId,
  ctrlWrapper(deleteContactController),
);

export default router;
