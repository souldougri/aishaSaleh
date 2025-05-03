import mongoose from 'mongoose';

const educationSchema = mongoose.Schema(
  {
    institution: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    fieldOfStudy: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
    current: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const experienceSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
    current: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const awardSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    organization: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const socialSchema = mongoose.Schema({
  platform: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
});

const profileSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: {
        en: { type: String, required: true },
        fr: { type: String, required: true },
        ar: { type: String, required: true },
      },
      required: true,
    },
    title: {
      type: {
        en: { type: String, required: true },
        fr: { type: String, required: true },
        ar: { type: String, required: true },
      },
      required: true,
    },
    bio: {
      type: {
        en: { type: String, required: true },
        fr: { type: String, required: true },
        ar: { type: String, required: true },
      },
      required: true,
    },
    location: {
      type: {
        en: { type: String, required: true },
        fr: { type: String, required: true },
        ar: { type: String, required: true },
      },
      required: true,
    },
    avatar: {
      type: String,
    },
    coverImage: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    skills: {
      type: [{
        name: {
          en: { type: String, required: true },
          fr: { type: String, required: true },
          ar: { type: String, required: true },
        },
        level: {
          type: Number,
          min: 1,
          max: 5,
          default: 3,
        },
      }],
    },
    education: [educationSchema],
    experience: [experienceSchema],
    awards: [awardSchema],
    social: [socialSchema],
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
