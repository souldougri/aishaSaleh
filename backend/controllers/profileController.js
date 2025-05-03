import asyncHandler from '../middleware/asyncHandler.js';
import Profile from '../models/profileModel.js';

// @desc    Get profile
// @route   GET /api/profile
// @access  Public
const getProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.findOne().populate('user', 'name email');

  if (profile) {
    res.json(profile);
  } else {
    res.status(404);
    throw new Error('Profile not found');
  }
});

// @desc    Update profile
// @route   PUT /api/profile
// @access  Private/Admin
const updateProfile = asyncHandler(async (req, res) => {
  const {
    name,
    title,
    bio,
    location,
    phone,
    email,
    website,
    skills,
  } = req.body;

  let profile = await Profile.findOne();

  if (profile) {
    profile.name = name || profile.name;
    profile.title = title || profile.title;
    profile.bio = bio || profile.bio;
    profile.location = location || profile.location;
    profile.phone = phone || profile.phone;
    profile.email = email || profile.email;
    profile.website = website || profile.website;
    profile.skills = skills || profile.skills;

    // Update avatar and cover image if new ones were uploaded
    if (req.files) {
      if (req.files.avatar) {
        profile.avatar = `/uploads/profile/${req.files.avatar[0].filename}`;
      }
      if (req.files.coverImage) {
        profile.coverImage = `/uploads/profile/${req.files.coverImage[0].filename}`;
      }
    }

    const updatedProfile = await profile.save();
    res.json(updatedProfile);
  } else {
    // If no profile exists, create a new one
    profile = new Profile({
      user: req.user._id,
      name,
      title,
      bio,
      location,
      phone,
      email,
      website,
      skills: skills || [],
      avatar: req.files && req.files.avatar ? `/uploads/profile/${req.files.avatar[0].filename}` : '',
      coverImage: req.files && req.files.coverImage ? `/uploads/profile/${req.files.coverImage[0].filename}` : '',
    });

    const createdProfile = await profile.save();
    res.status(201).json(createdProfile);
  }
});

// @desc    Add education
// @route   POST /api/profile/education
// @access  Private/Admin
const addEducation = asyncHandler(async (req, res) => {
  const {
    institution,
    degree,
    fieldOfStudy,
    startDate,
    endDate,
    current,
    description,
    location,
  } = req.body;

  const profile = await Profile.findOne();

  if (profile) {
    profile.education.unshift({
      institution,
      degree,
      fieldOfStudy,
      startDate,
      endDate,
      current,
      description,
      location,
    });

    await profile.save();
    res.json(profile);
  } else {
    res.status(404);
    throw new Error('Profile not found');
  }
});

// @desc    Update education
// @route   PUT /api/profile/education/:id
// @access  Private/Admin
const updateEducation = asyncHandler(async (req, res) => {
  const {
    institution,
    degree,
    fieldOfStudy,
    startDate,
    endDate,
    current,
    description,
    location,
  } = req.body;

  const profile = await Profile.findOne();

  if (profile) {
    const educationIndex = profile.education.findIndex(
      (edu) => edu._id.toString() === req.params.id
    );

    if (educationIndex >= 0) {
      profile.education[educationIndex] = {
        ...profile.education[educationIndex],
        institution: institution || profile.education[educationIndex].institution,
        degree: degree || profile.education[educationIndex].degree,
        fieldOfStudy: fieldOfStudy || profile.education[educationIndex].fieldOfStudy,
        startDate: startDate || profile.education[educationIndex].startDate,
        endDate: endDate || profile.education[educationIndex].endDate,
        current: current !== undefined ? current : profile.education[educationIndex].current,
        description: description || profile.education[educationIndex].description,
        location: location || profile.education[educationIndex].location,
        _id: profile.education[educationIndex]._id,
      };

      await profile.save();
      res.json(profile);
    } else {
      res.status(404);
      throw new Error('Education not found');
    }
  } else {
    res.status(404);
    throw new Error('Profile not found');
  }
});

// @desc    Delete education
// @route   DELETE /api/profile/education/:id
// @access  Private/Admin
const deleteEducation = asyncHandler(async (req, res) => {
  const profile = await Profile.findOne();

  if (profile) {
    profile.education = profile.education.filter(
      (edu) => edu._id.toString() !== req.params.id
    );

    await profile.save();
    res.json(profile);
  } else {
    res.status(404);
    throw new Error('Profile not found');
  }
});

// @desc    Add experience
// @route   POST /api/profile/experience
// @access  Private/Admin
const addExperience = asyncHandler(async (req, res) => {
  const {
    title,
    company,
    location,
    startDate,
    endDate,
    current,
    description,
  } = req.body;

  const profile = await Profile.findOne();

  if (profile) {
    profile.experience.unshift({
      title,
      company,
      location,
      startDate,
      endDate,
      current,
      description,
    });

    await profile.save();
    res.json(profile);
  } else {
    res.status(404);
    throw new Error('Profile not found');
  }
});

// @desc    Update experience
// @route   PUT /api/profile/experience/:id
// @access  Private/Admin
const updateExperience = asyncHandler(async (req, res) => {
  const {
    title,
    company,
    location,
    startDate,
    endDate,
    current,
    description,
  } = req.body;

  const profile = await Profile.findOne();

  if (profile) {
    const experienceIndex = profile.experience.findIndex(
      (exp) => exp._id.toString() === req.params.id
    );

    if (experienceIndex >= 0) {
      profile.experience[experienceIndex] = {
        ...profile.experience[experienceIndex],
        title: title || profile.experience[experienceIndex].title,
        company: company || profile.experience[experienceIndex].company,
        location: location || profile.experience[experienceIndex].location,
        startDate: startDate || profile.experience[experienceIndex].startDate,
        endDate: endDate || profile.experience[experienceIndex].endDate,
        current: current !== undefined ? current : profile.experience[experienceIndex].current,
        description: description || profile.experience[experienceIndex].description,
        _id: profile.experience[experienceIndex]._id,
      };

      await profile.save();
      res.json(profile);
    } else {
      res.status(404);
      throw new Error('Experience not found');
    }
  } else {
    res.status(404);
    throw new Error('Profile not found');
  }
});

// @desc    Delete experience
// @route   DELETE /api/profile/experience/:id
// @access  Private/Admin
const deleteExperience = asyncHandler(async (req, res) => {
  const profile = await Profile.findOne();

  if (profile) {
    profile.experience = profile.experience.filter(
      (exp) => exp._id.toString() !== req.params.id
    );

    await profile.save();
    res.json(profile);
  } else {
    res.status(404);
    throw new Error('Profile not found');
  }
});

// @desc    Add award
// @route   POST /api/profile/awards
// @access  Private/Admin
const addAward = asyncHandler(async (req, res) => {
  const {
    title,
    organization,
    date,
    description,
  } = req.body;

  const profile = await Profile.findOne();

  if (profile) {
    profile.awards.unshift({
      title,
      organization,
      date,
      description,
    });

    await profile.save();
    res.json(profile);
  } else {
    res.status(404);
    throw new Error('Profile not found');
  }
});

// @desc    Update award
// @route   PUT /api/profile/awards/:id
// @access  Private/Admin
const updateAward = asyncHandler(async (req, res) => {
  const {
    title,
    organization,
    date,
    description,
  } = req.body;

  const profile = await Profile.findOne();

  if (profile) {
    const awardIndex = profile.awards.findIndex(
      (award) => award._id.toString() === req.params.id
    );

    if (awardIndex >= 0) {
      profile.awards[awardIndex] = {
        ...profile.awards[awardIndex],
        title: title || profile.awards[awardIndex].title,
        organization: organization || profile.awards[awardIndex].organization,
        date: date || profile.awards[awardIndex].date,
        description: description || profile.awards[awardIndex].description,
        _id: profile.awards[awardIndex]._id,
      };

      await profile.save();
      res.json(profile);
    } else {
      res.status(404);
      throw new Error('Award not found');
    }
  } else {
    res.status(404);
    throw new Error('Profile not found');
  }
});

// @desc    Delete award
// @route   DELETE /api/profile/awards/:id
// @access  Private/Admin
const deleteAward = asyncHandler(async (req, res) => {
  const profile = await Profile.findOne();

  if (profile) {
    profile.awards = profile.awards.filter(
      (award) => award._id.toString() !== req.params.id
    );

    await profile.save();
    res.json(profile);
  } else {
    res.status(404);
    throw new Error('Profile not found');
  }
});

// @desc    Add social
// @route   POST /api/profile/social
// @access  Private/Admin
const addSocial = asyncHandler(async (req, res) => {
  const {
    platform,
    url,
    icon,
  } = req.body;

  const profile = await Profile.findOne();

  if (profile) {
    profile.social.unshift({
      platform,
      url,
      icon,
    });

    await profile.save();
    res.json(profile);
  } else {
    res.status(404);
    throw new Error('Profile not found');
  }
});

// @desc    Update social
// @route   PUT /api/profile/social/:id
// @access  Private/Admin
const updateSocial = asyncHandler(async (req, res) => {
  const {
    platform,
    url,
    icon,
  } = req.body;

  const profile = await Profile.findOne();

  if (profile) {
    const socialIndex = profile.social.findIndex(
      (soc) => soc._id.toString() === req.params.id
    );

    if (socialIndex >= 0) {
      profile.social[socialIndex] = {
        ...profile.social[socialIndex],
        platform: platform || profile.social[socialIndex].platform,
        url: url || profile.social[socialIndex].url,
        icon: icon || profile.social[socialIndex].icon,
        _id: profile.social[socialIndex]._id,
      };

      await profile.save();
      res.json(profile);
    } else {
      res.status(404);
      throw new Error('Social media not found');
    }
  } else {
    res.status(404);
    throw new Error('Profile not found');
  }
});

// @desc    Delete social
// @route   DELETE /api/profile/social/:id
// @access  Private/Admin
const deleteSocial = asyncHandler(async (req, res) => {
  const profile = await Profile.findOne();

  if (profile) {
    profile.social = profile.social.filter(
      (soc) => soc._id.toString() !== req.params.id
    );

    await profile.save();
    res.json(profile);
  } else {
    res.status(404);
    throw new Error('Profile not found');
  }
});

export {
  getProfile,
  updateProfile,
  addEducation,
  updateEducation,
  deleteEducation,
  addExperience,
  updateExperience,
  deleteExperience,
  addAward,
  updateAward,
  deleteAward,
  addSocial,
  updateSocial,
  deleteSocial,
};
